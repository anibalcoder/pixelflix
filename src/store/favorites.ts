import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { MediaType } from '../core/types/global'

export interface FavoriteMediaItem {
  id: number
  title: string
  relativeBackdropPath: string
  voteAverage: number
  releaseDate: Date
  media: MediaType
}

interface FavoriteMediaState {
  favorites: FavoriteMediaItem[]
  toggleFavorite: (media: FavoriteMediaItem, isFavorite: boolean) => void
  addFavorite: (media: FavoriteMediaItem) => void
  removeFavorite: (id: FavoriteMediaItem['id']) => void
  clearFavorites: () => void
}

export const useFavoriteMediaStore = create<FavoriteMediaState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (media: FavoriteMediaItem, isInFavorite: boolean) => {
        if (isInFavorite) get().removeFavorite(media.id)
        else get().addFavorite({ ...media })
      },

      addFavorite: (media: FavoriteMediaItem) => {
        set((state) => ({
          favorites: [...state.favorites, media]
        }))
      },

      removeFavorite: (id: FavoriteMediaItem['id']) => {
        const updatedFavorites = get().favorites.filter((item) => item.id !== id)
        set({ favorites: updatedFavorites })
      },

      clearFavorites: () => {
        set({ favorites: [] })
      }
    }),
    {
      name: 'pixelflix__favorites'
    }
  )
)
