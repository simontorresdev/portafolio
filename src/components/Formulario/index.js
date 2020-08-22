import React, { useState } from 'react'
import { Form, ContainerInput, Label, InputText, InputTextarea, ContainerMessageSent } from './styles'
import { Boton } from '../../styles/GlobalStyles'
import { useInput } from '../../hooks/useInput'
import { PopUp } from '../Popup'
import Image from '../image'

export const Formulario = () => {
  const name = useInput('', 'inputName', 'labelName')
  const email = useInput('', 'inputEmail', 'labelEmail')
  const subject = useInput('', 'inputSubject', 'labelSubject')
  const message = useInput('', 'inputMessage', 'labelMessage')

  const [open, setOpen] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        setOpen(true)
        console.log('enviado')
      } else {
        console.log('error')
      }
    }
    xhr.send(data)
  }

  return (
    <Form action='https://formspree.io/maypzbkq' method='POST' onSubmit={submitForm}>
      <ContainerInput>
        <Label htmlFor='inputName' id='labelName'>Nombre</Label>
        <InputText type='text' name='name' id='inputName' required value={name.value} onChange={name.onChange} />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor='inputEmail' id='labelEmail'>Email</Label>
        <InputText type='email' name='_replyto' id='inputEmail' required value={email.value} onChange={email.onChange} />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor='inputSubject' id='labelSubject'>Asunto</Label>
        <InputText type='text' name='subject' id='inputSubject' required value={subject.value} onChange={subject.onChange} />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor='inputMessage' id='labelMessage'>Mensaje</Label>
        <InputTextarea name='message' id='inputMessage' required value={message.value} onChange={message.onChange} />
      </ContainerInput>
      <Boton>Enviar Mensaje</Boton>
      <PopUp open={open} setOpen={setOpen} name={name} email={email} subject={subject} message={message}>
        <MessageSent name={name.value} />
      </PopUp>
    </Form>
  )
}

const MessageSent = ({ name }) => {
  return (
    <ContainerMessageSent>
      <Image name='contactado2.png' />
      <h3 size='28px'>Mensaje Enviado!</h3>
      <p>
        Gracias por tu mensaje <b>{`${name}`}</b>,
        responderé lo más pronto posible :)
      </p>
    </ContainerMessageSent>
  )
}
