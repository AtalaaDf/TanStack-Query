import { useMutation } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'

export function useCreateProfile() {
  return useMutation({
    mutationFn: async (profileData) => {
      const { data, error } = await supabase
        .from('profiles')
        .insert(profileData)
        .select()
        .single()
      if (error) throw error
      return data
    },
  })
}