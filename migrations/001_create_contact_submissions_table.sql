-- Migration generated from MCP operation
-- Operation: create_contact_submissions_table
-- Purpose: Create contact form submissions table with RLS policies

-- Create contact submissions table
CREATE TABLE public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL DEFAULT '58ec3cec-9bce-44e7-980d-27352226a600'::uuid,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions" ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous users to insert contact forms
CREATE POLICY "Allow anonymous insert"
  ON public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions"
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for authenticated users to view their own submissions
CREATE POLICY "Users can view own submissions"
  ON public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions"
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Create policy for service role to have full access
CREATE POLICY "Service role full access"
  ON public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Add comments
COMMENT ON TABLE public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions" IS 'Contact form submissions from website visitors';
COMMENT ON COLUMN public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions".id IS 'Unique identifier for each submission';
COMMENT ON COLUMN public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions".user_id IS 'User ID for RLS policies';
COMMENT ON COLUMN public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions".name IS 'Contact person full name';
COMMENT ON COLUMN public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions".email IS 'Contact person email address';
COMMENT ON COLUMN public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions".phone IS 'Optional phone number';
COMMENT ON COLUMN public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions".company IS 'Optional company name';
COMMENT ON COLUMN public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions".message IS 'Contact message content';
COMMENT ON COLUMN public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions".status IS 'Processing status of the submission';
COMMENT ON COLUMN public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions".created_at IS 'Timestamp when submission was created';
COMMENT ON COLUMN public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions".updated_at IS 'Timestamp when submission was last updated';

-- End of migration