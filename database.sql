-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.users (
  id uuid NOT NULL DEFAULT auth.uid(),
  full_name text,
  email text,
  student_id text,
  campus text,
  role text DEFAULT 'member'::text,
  created_at timestamp without time zone DEFAULT now(),
  CONSTRAINT users_pkey PRIMARY KEY (id)
);
CREATE TABLE public.registrations (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  program_id uuid,
  status text DEFAULT 'registered'::text,
  CONSTRAINT registrations_pkey PRIMARY KEY (id),
  CONSTRAINT registrations_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE TABLE public.profiles (
  id uuid NOT NULL,
  full_name text,
  student_id text UNIQUE,
  email text UNIQUE,
  campus text,
  department text,
  role text DEFAULT 'member'::text,
  avatar_url text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  bio text,
  linkedin_url text,
  telegram_url text,
  instagram_url text,
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);
CREATE TABLE public.certificates (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  program_id uuid,
  certificate_url text,
  issued_at timestamp with time zone DEFAULT now(),
  CONSTRAINT certificates_pkey PRIMARY KEY (id),
  CONSTRAINT certificates_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id)
);
CREATE TABLE public.notifications (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  message text NOT NULL,
  user_id uuid,
  is_read boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT notifications_pkey PRIMARY KEY (id),
  CONSTRAINT notifications_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles(id)
);
CREATE TABLE public.board_members (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  image text,
  campus text,
  category text,
  email text,
  linkedin text,
  telegram text,
  instagram text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  CONSTRAINT board_members_pkey PRIMARY KEY (id)
);
CREATE TABLE public.programs (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE,
  description text,
  long_description text,
  image text,
  category text,
  campus text,
  status text DEFAULT 'upcoming'::text,
  start_date date,
  end_date date,
  application_deadline date,
  registration_link text,
  featured boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  CONSTRAINT programs_pkey PRIMARY KEY (id)
);
CREATE TABLE public.program_registrations (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  program_id uuid,
  full_name text NOT NULL,
  email text NOT NULL,
  department text,
  year text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  CONSTRAINT program_registrations_pkey PRIMARY KEY (id),
  CONSTRAINT program_registrations_program_id_fkey FOREIGN KEY (program_id) REFERENCES public.programs(id)
);
CREATE TABLE public.members (
  id uuid NOT NULL,
  full_name text NOT NULL,
  student_id text NOT NULL UNIQUE,
  email text NOT NULL,
  campus text NOT NULL CHECK (campus = ANY (ARRAY['Main Campus'::text, 'BECO'::text, 'JiT'::text, 'AGRI'::text])),
  department text NOT NULL,
  joined_at timestamp with time zone DEFAULT now(),
  is_active boolean DEFAULT true,
  CONSTRAINT members_pkey PRIMARY KEY (id),
  CONSTRAINT members_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);
CREATE TABLE public.admins (
  id uuid NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT admins_pkey PRIMARY KEY (id),
  CONSTRAINT admins_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);