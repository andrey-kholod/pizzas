import React from "react";
import Pizza from "./models/Pizza";

type Utilitys = {
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void
}

export const context = React.createContext<Utilitys | null>(null)