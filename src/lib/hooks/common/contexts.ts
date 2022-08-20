import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react'

export type BooleanTheme = {
  value: boolean
  changeValue: Dispatch<SetStateAction<boolean>>
}

export type StringTheme = {
  value: string
  changeValue: Dispatch<SetStateAction<string>>
}

export type NumberTheme = {
  value: number
  changeValue: Dispatch<SetStateAction<number>>
}

export type ArrayTheme<T> = {
  value: T[]
  changeValue: Dispatch<SetStateAction<T[]>>
}

export const defaultBooleanContext: BooleanTheme = {
  value: false,
  changeValue: () => {},
}

export const defaultStringContext: StringTheme = {
  value: '',
  changeValue: () => {},
}

export const defaultNumberContext: NumberTheme = {
  value: 0,
  changeValue: () => {},
}

export const defaultArrayContext = {
  value: [],
  changeValue: () => {},
}

export const useBooleanState = (defaultValue: boolean): BooleanTheme => {
  const [value, cv] = useState(defaultValue)

  const changeValue = useCallback((v): void => {
    cv(v)
  }, [])

  return { value, changeValue }
}

export const useStringState = (defaultValue: string): StringTheme => {
  const [value, cv] = useState(defaultValue)

  const changeValue = useCallback((v) => {
    cv(v)
  }, [])

  return { value, changeValue }
}

export const useNumberState = (defaultValue: number): NumberTheme => {
  const [value, cv] = useState(defaultValue)

  const changeValue = useCallback((v) => {
    cv(v)
  }, [])

  return { value, changeValue }
}

export function useArrayState<T>(defaultValue: T[]): ArrayTheme<T> {
  const [value, cv] = useState(defaultValue)

  const changeValue = useCallback((v) => {
    cv(v)
  }, [])

  return { value, changeValue }
}

export const createBooleanContext = () => {
  return createContext(defaultBooleanContext)
}

export const createStringContext = () => {
  return createContext(defaultStringContext)
}

export const createNumberContext = () => {
  return createContext(defaultNumberContext)
}

export function createArrayContext<T>() {
  return createContext<ArrayTheme<T>>(defaultArrayContext)
}
