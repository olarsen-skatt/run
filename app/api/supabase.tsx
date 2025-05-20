import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export const getFromTable = async (table: string, filters = {}) => {
  let query = supabase.from(table).select('*')
  Object.entries(filters).forEach(([key, value]) => {
    query = query.eq(key, value)
  })

  const { data, error } = await query
  if (error) throw error
  return data
}

export const insertIntoTable = async (table: string, payload: object) => {
  const { data, error } = await supabase.from(table).insert(payload).select()
  if (error) throw error
  return data
}

export const updateTableRow = async (
  table: string,
  updates: object,
  match: object
) => {
  let query = supabase.from(table).update(updates)
  Object.entries(match).forEach(([key, value]) => {
    query = query.eq(key, value)
  })

  const { data, error } = await query.select()
  if (error) throw error
  return data
}
