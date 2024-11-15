import { redirect } from "next/navigation";
import React from 'react'

import { createClient } from "../../utils/supabase/server.ts";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return <p>Hello {data.user.email}</p>;
}
