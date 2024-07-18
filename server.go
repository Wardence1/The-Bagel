package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {

	fs := http.FileServer(http.Dir("./"))
	http.Handle("/", fs)

	port := "3000"
	fmt.Printf("Server live at http://localhost:%s\n", port)

	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		fmt.Println("Server error")
		os.Exit(1)
	}
}
