/*
  # Create features and onboarding tables

  1. New Tables
    - `features`
      - `id` (uuid, primary key)
      - `plan_type` (text, plan identifier)
      - `name` (text, feature name)
      - `description` (text, feature description)
      - `added_by` (text, team member name)
      - `created_at` (timestamp)
    - `onboarding_questions`
      - `id` (uuid, primary key)
      - `plan_type` (text, plan identifier)
      - `question` (text, the question content)
      - `added_by` (text, team member name)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public access (internal team tool)
*/

CREATE TABLE IF NOT EXISTS features (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_type text NOT NULL,
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  added_by text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS onboarding_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_type text NOT NULL,
  question text NOT NULL,
  added_by text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE features ENABLE ROW LEVEL SECURITY;
ALTER TABLE onboarding_questions ENABLE ROW LEVEL SECURITY;

-- Allow public access for internal team tool
CREATE POLICY "Allow all operations on features"
  ON features
  FOR ALL
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow all operations on onboarding_questions"
  ON onboarding_questions
  FOR ALL
  TO public
  USING (true)
  WITH CHECK (true);