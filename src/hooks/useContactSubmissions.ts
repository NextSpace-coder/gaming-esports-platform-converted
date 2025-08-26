import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type ContactSubmission = Database['public']['Tables']['58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions']['Insert'];

export const useContactSubmissions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContact = async (contactData: Omit<ContactSubmission, 'id' | 'user_id' | 'created_at' | 'updated_at' | 'status'>) => {
    console.log('useContactSubmissions: Starting submission...', contactData);
    setLoading(true);
    setError(null);

    try {
      console.log('useContactSubmissions: Calling Supabase...');
      
      const { data, error: submitError } = await supabase
        .from('58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions')
        .insert({
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone,
          company: contactData.company,
          message: contactData.message,
          status: 'new'
        })
        .select()
        .single();

      console.log('useContactSubmissions: Supabase response:', { data, error: submitError });

      if (submitError) {
        console.error('useContactSubmissions: Supabase error:', submitError);
        throw new Error(submitError.message);
      }

      console.log('useContactSubmissions: Success!', data);
      return { data, error: null };
    } catch (err) {
      console.error('useContactSubmissions: Catch error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      return { data: null, error: errorMessage };
    } finally {
      setLoading(false);
      console.log('useContactSubmissions: Submission completed');
    }
  };

  return {
    submitContact,
    loading,
    error
  };
};