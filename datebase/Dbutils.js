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

export const deleteById=(id)=>{
    return new Promise((resolve, reject)=>{
        db.transaction((transaction)=>{
            transaction.executeSql(
                `DELETE FROM recipes WHERE id=?`, [id],
                (tx, res)=>resolve(res),
                //.rows._array
                    //.map(recipe=>new Recipe(recipe.id,recipe.image, recipe.titel, recipe.ingredients, recipe.cooking))
                    //),
                (tx,err)=>reject(err)
            )
        })
    })
}