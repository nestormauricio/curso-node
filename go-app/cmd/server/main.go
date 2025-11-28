package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/nestormauricio/curso-node/go-app/internal/database"
	"github.com/nestormauricio/curso-node/go-app/internal/routes"
)

func main() {
	// Conectar a la base de datos
	database.ConnectDB()

	app := fiber.New()

	// Registrar rutas
	routes.SetupRoutes(app)

	log.Println("🚀 Servidor Go corriendo en http://localhost:4000")
	log.Fatal(app.Listen(":4000"))
}