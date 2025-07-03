import { useActionState, use, useEffect } from 'react'
import { AuthContext } from "./context/authContext"

async function loginFormAction(Prevstate, formData) {

    const email = formData.get("email");
    const password = formData.get("password");

    if (email !== "arman@gmail.com" || password !== "123456") {
        return { success: false, user: null, message: "email and password did not matched" }
    }

    return { success: true, user: { email: email, name: "Arman Bhatia" }, message: "email and password did not matched" }

}



export default function Login() {
    const { login, user } = use(AuthContext);
    const [formState, formAction] = useActionState(loginFormAction, { success: false, user: null, message: null })

    useEffect(() => {
        if (formState.success) {
            login(formState.user)
        }
    }, [formState, login])

    return <form action={formAction}>
        <input type="text" name="email" id="" />
        <input type="password" name="password" id="" />
        <button>Submit</button>
        {formState.success ? <div>{formState.user.name}</div> : null}
    </form>
}