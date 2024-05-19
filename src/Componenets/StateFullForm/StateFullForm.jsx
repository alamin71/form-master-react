import { useState } from "react";


const StateFullForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = e => {

        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 character or longer')
        }
        else {
            setError('')
            console.log(name)
            console.log(email)
            console.log(password)
        }
    }
    const handlechangeName = e => {
        setName(e.target.value)

    }
    const handlechangeEmail = e => {
        setEmail(e.target.value)

    }
    const handlechangePassword = e => {
        setPassword(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handlechangeName}
                    type="text" name="name" /><br />
                <input onChange={handlechangeEmail}
                    type="email" name="email" /><br />
                <input onChange={handlechangePassword}
                    type="password" name="password" required /><br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;