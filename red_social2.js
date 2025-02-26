const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const usersDatabase = [
  { username: "andres", password: "123" },
  { username: "caro", password: "456" },
  { username: "mariana", password: "789" },
];

const usersTimeline = [
  { username: "Estefany", timeline: "Me encanta JavaScript!" },
  { username: "Oscar", timeline: "Bebeloper es lo mejor!" },
  { username: "Mariana", timeline: "A mí me gusta más el café que el té" },
  { username: "Andres", timeline: "Yo hoy no quiero trabajar" },
];

function usuarioExistente(username, password) {
  return usersDatabase.some(
    (user) => user.username === username && user.password === password
  );
}

function signIn(username, password) {
  if (usuarioExistente(username, password)) {
    console.log(`✅ Bienvenido a tu cuenta, ${username}!`);
    console.log("📌 Tu timeline:");
    usersTimeline.forEach((post) => console.log(`- ${post.username}: ${post.timeline}`));
  } else {
    console.log("❌ Uuups, usuario o contraseña incorrectos!");
  }
}

rl.question("👤 Cual es tu usuario? ", (username) => {
  rl.question("🔑 Cual es tu contraseña? ", (password) => {
    signIn(username, password);
    rl.close();
  });
});
