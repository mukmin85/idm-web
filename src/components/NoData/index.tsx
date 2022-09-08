import React from 'react'
import { NoDataText, NoDataImg } from './styled'
import { Text } from '../index'

interface RenderNoDataProps {
  Text1?: string
  Text2?: string
}

const RenderNoData = ({
  Text1 = 'Tiada maklumat.',
  Text2 = 'Sila masukkan No. Permohonan / Kad Pengenalan / Passport'
}: RenderNoDataProps) => (
  <NoDataText>
    <NoDataImg />
    <Text>{Text1}</Text>
    <Text>{Text2}</Text>
  </NoDataText>
)

export default RenderNoData
