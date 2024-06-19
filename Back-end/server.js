import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

// Metodos

// 1 - Criar Usuarios
app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(201).json(req.body);
});

// 2 - Listar Usuarios
// app.get("/usuarios", async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.status(200).json(users);
// });

// 2 - Listar Usuarios com filtro
app.get("/usuarios", async (req, res) => {
  let users = [];
  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.name,
        age: req.query.age,
      },
    });
  } else {
    users = await prisma.user.findMany();
  }
  res.status(200).json(users);
});

// 3 - Editar Usuarios
app.put("/usuarios/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(201).json(req.body);
});

// 4 - Deletar Usuarios
app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Usuario deletado com Sucesso!" });
});

app.listen(4000);

// marcelo  -  eZZBrRg9tkF0Rqnl
