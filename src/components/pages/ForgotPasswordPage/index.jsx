import React from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  ADForm,
  ADFormItem,
  ADButton,
  ADInput,
  Block,
} from 'components'

const StyledPage = styled(Block)`
  display: flex;  
  height: 100vh;
`

const StyledBlock = styled(Block)`
  border: solid rgba(0,255,255,0.2);
  border-radius: 4px;
  height: auto;
  width: 400px;
  padding: 30px;
`

const ForgotPasswordPage = () => {
  return (
    <StyledPage>
      <StyledBlock>
        <Block className="logo" />
        <ADForm>
          <span>
            Already have an account? Fill your
            email to retrieve your password.
          </span>
          <ADInput placeholder="Enter your email!" />

          <ADFormItem>
            <ADButton palette="primary" htmlType="submit">
              Submit
            </ADButton>
          </ADFormItem>
        </ADForm>
      </StyledBlock>
    </StyledPage>
  )
}

ForgotPasswordPage.propTypes = {
  // onFinish: PropTypes.func.isRequired,
  // onFinishFailed: PropTypes.func.isRequired,
}

export { ForgotPasswordPage }
