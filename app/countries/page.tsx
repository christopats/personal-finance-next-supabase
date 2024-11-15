import React from 'react';
import { createClient } from '../../utils/supabase/server.ts';

export default async function Countries() {
  const supabase = await createClient();
  const { data: countries } = await supabase.from("countries").select();

  return <pre>{JSON.stringify(countries, null, 2)}</pre>
}