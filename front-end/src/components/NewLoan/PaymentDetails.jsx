import React from 'react'
import PropTypes from 'prop-types'
import { Body, Text, Card, CardItem } from 'native-base'

export default function PaymentDetails({ monthly, total }) {
  return (
    <Card transparent>
      <CardItem>
        <Body>
          <Text style={{ fontSize: 50 }}>{`$${monthly.toFixed(2)}`}</Text>
          <Text>paid monthly</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <Text style={{ fontSize: 30 }}>{`$${total.toFixed(2)}`}</Text>
          <Text>interest paid altogether</Text>
        </Body>
      </CardItem>
    </Card>
  )
}

PaymentDetails.propTypes = {
  monthly: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}
