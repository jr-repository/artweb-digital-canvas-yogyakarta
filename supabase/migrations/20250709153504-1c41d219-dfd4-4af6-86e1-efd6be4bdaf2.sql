-- Create admin user account
-- Note: This creates a user that can be used to sign in with email/password
-- You'll need to sign up with these credentials through the auth page

-- Insert admin user data (this will be created when user signs up)
-- For now, we'll create a placeholder admin profile entry
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change_token_new)
VALUES (
  gen_random_uuid(),
  'admin@artweb.com',
  crypt('artwebadmin', gen_salt('bf')),
  now(),
  '{"username": "artwe"}',
  now(),
  now(),
  '',
  ''
) ON CONFLICT (email) DO NOTHING;