import React from 'react'
import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
}

export default function Component({ rating = 4.3 }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const partialStar = rating % 1
  const emptyStars = 5 - Math.ceil(rating)

  return (
    <div
      className='flex items-center'
      aria-label={`Rating: ${rating} out of 5 stars`}
    >
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className='w-6 h-6 fill-yellow-400 text-yellow-400'
        />
      ))}
      {partialStar > 0 && (
        <div className='relative'>
          <Star className='w-6 h-6 text-yellow-400' />
          <div
            className='absolute top-0 left-0 overflow-hidden'
            style={{ width: `${partialStar * 100}%` }}
          >
            <Star className='w-6 h-6 fill-yellow-400 text-yellow-400' />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className='w-6 h-6 text-gray-300' />
      ))}
    </div>
  )
}
