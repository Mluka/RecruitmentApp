import React from 'react'
import { Redirect } from 'react-router-dom'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {update} from '../../redux/user.redux'

@connect(
  state => state.user,
  {update}
)
class BossInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  onChange (key, val) {
    this.setState({
      [key]: val
    })
  }

  render () {
    const path = this.props.location.pathname
    const redirectTo = this.props.redirectTo
    return (
      <div>
        {redirectTo && redirectTo !== path ? <Redirect to={this.props.redirectTo} /> : null}  
        <NavBar mode='dark'>Boss完善信息页面</NavBar>
        <AvatarSelector
          selectAvatar={imgname => {
            this.setState({
              avatar: imgname
            })
          }}
        />
        <InputItem onChange={v => this.onChange('title', v)}>
          招聘职位
        </InputItem>
        <InputItem onChange={v => this.onChange('company', v)}>
          公司名称
        </InputItem>
        <InputItem onChange={v => this.onChange('money', v)}>
          职位薪资
        </InputItem>
        <TextareaItem
          onChange={v => this.onChange('desc', v)}
          rows='3'
          autoHeight
          title='职位要求' />
        <Button 
          onClick={() => {
            this.props.update(this.state)
          }}
          type='primary'
        >保存</Button>
      </div>
    )
  }
}

export default BossInfo
