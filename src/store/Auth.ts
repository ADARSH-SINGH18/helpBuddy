import { immer } from "zustand/middleware/immer";
import { create } from "zustand";  
import { persist } from "zustand/middleware";

import { AppwriteException, ID, Models } from "appwrite";
import {account} from  "@/models/client/config"

export interface UserPrefs {
    reputation: number
}

interface IAuthStore {
    session: Models.Session | null,
    
} 

