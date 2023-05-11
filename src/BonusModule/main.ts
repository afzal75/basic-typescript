// import {add as addTwo, substract, multiply, divided } from './module'
import * as Methods from './module'

export const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3
}

const res = Methods.add(4, 6)
const subs = Methods.substract(4, 5)
const mul = Methods.multiply(4, 7)
const div = Methods.divided(7, 8)
const avg = Methods.average(44, 77)