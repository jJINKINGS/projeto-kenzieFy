import { z } from "zod";

type UserCreateExample = {
    username: string;
    email: string;
    password: string;
}

const bodyExample: any = {
    id: 1,
    username: "joao",
    email: "joao@gmail.com",
    password: "1234."
}

const userCreateServiceExample = (payload: UserCreate) => {
    return payload;
}

const newUserExample = userCreateServiceExample(bodyExample);
// console.log(newUserExample);

//acontece dessa forma pois nao é função do typescript serializar dados
// apenas dizer qual tipo é esperado e qual tipo está entrando
//para validar e serializar os dados antes que eles entrem precisamos utilizar o zod

const userCreateSchema = z.object({
    username: z.string().max(255),
    email: z.string().email().max(255),
    password: z.string(),
})

type UserCreate = z.infer<typeof userCreateSchema>;

const body: any = {
    id: 1,
    username: "joao",
    email: "joao@gmail.com",
    password: 1234
}

const userCreateService = (payload: UserCreate) => {
    payload = userCreateSchema.parse(payload); //serialização acontecendo/tratando os dados que entram
    return payload;
}

const newUser = userCreateService(body);
console.log(newUser);

//zod tambem trata os dados para saida