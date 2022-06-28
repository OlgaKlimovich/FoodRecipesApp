import * as SQLite from 'expo-sqlite';
import Recipe from '../models/Recipe';

const db=SQLite.openDatabase("recipesdb.db")

export const initDB=()=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `CREATE TABLE IF NOT EXISTS recipes(
                    id INTEGER PRIMARY KEY NOT NULL, 
                    image BLOB, 
                    titel TEXT NOT NULL, 
                    ingredients TEXT , 
                    cooking TEXT NOT NULL
                )`, [],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )

            transaction.executeSql(
                `CREATE TABLE IF NOT EXISTS dinner_recipes(
                    id INTEGER PRIMARY KEY NOT NULL, 
                    image BLOB, 
                    titel TEXT NOT NULL, 
                    ingredients TEXT , 
                    cooking TEXT NOT NULL
                )`, [],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )

            transaction.executeSql(
                `CREATE TABLE IF NOT EXISTS lunch_recipes(
                    id INTEGER PRIMARY KEY NOT NULL, 
                    image BLOB, 
                    titel TEXT NOT NULL, 
                    ingredients TEXT , 
                    cooking TEXT NOT NULL
                )`, [],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )

            transaction.executeSql(
                `CREATE TABLE IF NOT EXISTS snack_recipes(
                    id INTEGER PRIMARY KEY NOT NULL, 
                    image BLOB, 
                    titel TEXT NOT NULL, 
                    ingredients TEXT , 
                    cooking TEXT NOT NULL
                )`, [],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const getTableInfo=()=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `pragma table_info ('recipes')`, [],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )

            transaction.executeSql(
                `pragma table_info ('dinner_recipes')`, [],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )

            transaction.executeSql(
                `pragma table_info ('lunch_recipes')`, [],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )

            transaction.executeSql(
                `pragma table_info ('snack_recipes')`, [],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const insert=(recipe)=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `INSERT INTO recipes(image, titel, ingredients, cooking)
                VALUES (?, ?, ?, ?)`, [recipe.image, recipe.titel, recipe.ingredients, recipe.cooking],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const insertDinner=(dinner)=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `INSERT INTO dinner_recipes(image, titel, ingredients, cooking)
                VALUES (?, ?, ?, ?)`, [dinner.image, dinner.titel, dinner.ingredients, dinner.cooking],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const insertLunch=(lunch)=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `INSERT INTO lunch_recipes(image, titel, ingredients, cooking)
                VALUES (?, ?, ?, ?)`, [lunch.image, lunch.titel, lunch.ingredients, lunch.cooking],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const insertSnack=(snack)=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `INSERT INTO snack_recipes(image, titel, ingredients, cooking)
                VALUES (?, ?, ?, ?)`, [snack.image, snack.titel, snack.ingredients, snack.cooking],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const findAll=()=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `SELECT * FROM recipes`, [],
                (tx, res)=>resolve(
                    res.rows._array
                    .map(recipe=>new Recipe(recipe.id,recipe.image, recipe.titel, recipe.ingredients, recipe.cooking))
                    ),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const findAllDinner=()=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `SELECT * FROM dinner_recipes`, [],
                (tx, res)=>resolve(
                    res.rows._array
                    .map(dinner=>new Recipe(dinner.id, dinner.image, dinner.titel, dinner.ingredients, dinner.cooking))
                    ),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const findAllLunch=()=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `SELECT * FROM lunch_recipes`, [],
                (tx, res)=>resolve(
                    res.rows._array
                    .map(lunch=>new Recipe(lunch.id,lunch.image, lunch.titel, lunch.ingredients, lunch.cooking))
                    ),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const findAllSnack=()=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `SELECT * FROM snack_recipes`, [],
                (tx, res)=>resolve(
                    res.rows._array
                    .map(snack=>new Recipe(snack.id,snack.image, snack.titel, snack.ingredients, snack.cooking))
                    ),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const deleteById=(id)=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `DELETE FROM recipes WHERE id=?`, [id],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const deleteDinnerById=(id)=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `DELETE FROM dinner_recipes WHERE id=?`, [id],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const deleteLunchById=(id)=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `DELETE FROM lunch_recipes WHERE id=?`, [id],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )
        })
    })
}

export const deleteSnackById=(id)=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `DELETE FROM snack_recipes WHERE id=?`, [id],
                (tx, res)=>resolve(res),
                (tx,err)=>reject(err)
            )
        })
    })
}