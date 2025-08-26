-- Migration generated from MCP operation
-- Operation: add_contact_submissions_indexes_safe
-- Purpose: Add indexes and triggers for better performance

-- Create indexes for better query performance (idempotent)
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions" (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions" (status);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
  ON public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions" (email);

-- Create updated_at trigger function (idempotent)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop trigger if exists and recreate
DROP TRIGGER IF EXISTS update_contact_submissions_updated_at 
  ON public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions";

CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON public."58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions"
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- End of migration