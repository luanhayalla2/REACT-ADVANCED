import { useForm } from "react-hook-form";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const UserSchema = Z.object({
  name: Z.string().min(2, "Name deve ter pelo menos 2 caracteres"),
  email: Z.string().email("Email Invalid"),
  age: Z
       .number({ invalid_type_error: "Age must be a number" })
       .min(18, "Idade mínima é 18 anos"),
});

export default function UseForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,

    } = useForm({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            name: "",
            email: "",
            age: undefined,
        },
    });

    const onSubmit = (data) => {
        alert(`Usuario Cadastrado: \n${JSON.stringify(data, null, 2)}`);
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "300px",
                margin: "2rem auto",
            }}>

            <h2>Cadastro de usuário</h2>
            
            <div>
                <label>Nome:</label>
                <input  {...register("name")} />
                {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input  {...register("email")} />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            </div>

            <div>
                <label>Idade:</label>
                <input type="number" {...register("age", { valueAsNumber: true })} />
                {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
            </div>

            <button type="submit">Enviar</button>
        </form>
    );
}
