import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialFormData = {
  email: '',
  password: '',
};
export default function Login() {
  /* 
 ReadMe'deki görev listesini burada yapabilirsin.
 */
  const [formData, setFormData] = useState(initialFormData);
  let history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then((response) => {
        const user = response.data.find(
          (user) =>
            user.email === formData.email && user.password === formData.password
        );
        if (user) {
          history.push('/main');
        } else {
          history.push('/error');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password "
          type="password"
          onChange={handleChange}
        />
      </FormGroup>
      <Button color="primary">Sign In</Button>
    </Form>
  );
}
