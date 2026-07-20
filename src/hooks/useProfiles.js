import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'

export function useProfiles() {
  return useQuery({
    queryKey: ['profiles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
      if (error) throw error
      return data
    },
  })
}