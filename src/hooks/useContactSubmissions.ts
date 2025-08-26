import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type ContactSubmission = Database['public']['Tables']['58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions']['Insert'];

export const useContactSubmissions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContact = async (contactData: Omit<ContactSubmission, 'id' | 'user_id' | 'created_at' | 'updated_at' | 'status'>) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: submitError } = await supabase
        .from('58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions')
        .insert({
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone || null,
          company: contactData.company || null,
          message: contactData.message,
          status: 'new'
        })
        .select()
        .single();

      if (submitError) {
        throw new Error(submitError.message);
      }

      return { data, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      return { data: null, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    submitContact,
    loading,
    error
  };
};