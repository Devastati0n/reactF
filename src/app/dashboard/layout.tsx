/*

--------App Folder------------

| dashboard folder 
-admins folder page.tsx
-profile folder page.tsx
layout and page tsx only inside dashboard folder


| validation folder 
-confirm-signup 
-login
-reset-password 
a.confirm folder 
b.submit folder
-signup
_Each have a folder and tsx file_ 



| amplify-config.ts 
"use client";

import { Amplify, type ResourcesConfig } from "aws-amplify";

export const authConfig: ResourcesConfig["Auth"] = {
  Cognito: {
    userPoolId: String(process.env.NEXT_PUBLIC_USER_POOL_ID),
    userPoolClientId: String(process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID),
  },
};

Amplify.configure(
  {
    Auth: authConfig,
  },
  { ssr: true }
);

export default function ConfigureAmplifyClientSide() {
  return null;
}


-----------End App -------------




|ui folder(src)
-val uis
-dash uis
-profile-settings uis


|utils folder(src)
-amplify-utils.ts
-get-error-message.ts



| MiddleWare(src)



| lib folder(src) cognitoActions 
- cognitoActions.ts
A.import all uis from "aws-amplify/auth"
B.import { getErrorMessage } from "@/utils/get-error-message";
export async function handleSignUp

*/ 