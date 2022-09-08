import { FormattedMessage } from 'react-intl'
import axios from 'axios'
import moment from 'moment'

// router
import { useNavigate } from 'react-router-dom'

// api, cookies, query
import { useCookies } from 'react-cookie'

// redux
// import { useSelector } from "react-redux"
// import { themeData } from "../../redux/slices/theme"

// styles, assets
import { LoginBG, LoginContainer, LoginCenter } from './styled'

// components
import { Locale } from '../../components'

// antd
import { Button, Input, Typography, Form, Modal } from 'antd'

const { Title, Text, Link } = Typography

function LoginPage() {
  // states
  const [cookies, setCookie] = useCookies(['auth'])

  // package hooks
  const navigate = useNavigate()

  // functions
  const handleLogin = async (values) => {
    const header = {
      Token: 'string',
      Username: 'string',
      Latitude: 'string',
      Longitude: 'string',
      RequestId: 'string'
    }
    const reqBody: any = {
      Username: values.username,
      Password: values.password,
      RememberMe: true
    }
    const startTime = moment(new Date())
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/IDM/LogMasukKeluarApi/IDM_01_4_1`, reqBody)
    const endTime = moment(new Date())
    Modal.success({
      title: 'Results',
      content: `Operation completed in ${endTime.diff(startTime)} miliseconds`
    })
    const {
      data: { Token }
    } = response
    setCookie('auth', Token)
    navigate('/upload')
  }

  const [form] = Form.useForm()

  return (
    <Locale>
      <LoginBG>
        <LoginCenter>
          <img src={require('assets/imigresen_logo.png')} style={{ width: 'auto', height: '130px', margin: '10px' }} alt='img' />
          <Title level={2} style={{ color: 'var(--clr-yellow)', marginBottom: '10px' }}>
            Jabatan Imigresen Malaysia
          </Title>
          <LoginContainer>
            <div style={{ height: '10px' }}></div>
            <Title level={5}>
              <FormattedMessage id='welcome' />
            </Title>
            <img src={require('assets/niise_logo.png')} style={{ width: '50%', height: 'auto', margin: '0px 10px 10px' }} alt='img' />
            <Form
              onFinish={handleLogin}
              autoComplete='off'
              form={form}
              layout='vertical'
              style={{ margin: '10px 25px', textAlign: 'left' }}
            >
              <Text strong>
                <FormattedMessage id='user_id' />
              </Text>
              <div style={{ height: '5px' }}></div>
              <Form.Item name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input onKeyPress={(e) => e.key === 'Enter' && handleLogin} style={{ borderRadius: '5px' }} />
              </Form.Item>

              <div style={{ height: '10px' }}></div>
              <Text strong>
                <FormattedMessage id='password' />
              </Text>
              <div style={{ height: '5px' }}></div>
              <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password onKeyPress={(e) => e.key === 'Enter' && handleLogin} style={{ borderRadius: '5px' }} />
              </Form.Item>

              <div style={{ textAlign: 'right' }}>
                <Link>
                  <FormattedMessage id='forgot_password' />
                </Link>
              </div>
              <div style={{ height: '20px' }}></div>
              <Button type='primary' style={{ width: '100%' }} htmlType='submit'>
                <FormattedMessage id='login' />
              </Button>
            </Form>
          </LoginContainer>
        </LoginCenter>
      </LoginBG>
    </Locale>
  )
}

export default LoginPage
