import * as React from 'react'
type SvgProps = {
  fill: string
  className: string
}

function SvgComponent({ fill, className }: SvgProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1280.000000pt'
      height='797.000000pt'
      viewBox='0 0 1280.000000 797.000000'
      fill={fill}
      className={className}>
      <path
        d='M3123 7575l-36-36-91 2c-85 2-93 4-124 30-46 40-103 41-132 0l-22-28-136-2c-231-3-610-27-907-57-301-30-877-108-921-124-46-18-66-317-29-435 25-79 71-144 125-177l45-27 445 34c835 65 1430 92 1430 66 0-17 61-51 93-51 19 0 39 10 57 30 27 29 32 30 110 30 77 0 84-2 117-30 44-39 94-41 127-5 21 23 31 25 106 25 77 0 84-2 117-30 46-41 92-43 130-8 20 19 30 20 117 14 91-7 97-9 130-42 42-42 96-47 133-12 22 20 27 21 102 11 54-7 88-17 107-32 28-22 73-27 103-12 11 6 48 4 107-8 78-15 93-22 125-54 42-42 83-48 119-19 22 18 25 18 106-2 56-13 84-25 84-34 0-8 15-29 34-48 40-40 80-45 119-14 32 25 30 25 126-5 74-24 81-28 81-51 0-16 13-39 34-60 44-44 87-46 125-5l27 28 134-51c161-62 246-106 289-150 26-27 34-46 43-102 17-111 44-152 127-194 48-24 100-24 158 1 30 12 36 11 107-26 54-28 75-43 72-54-3-9-8-52-12-96-5-70-4-82 12-97 11-9 91-52 179-97 174-87 247-142 293-219l27-47 1-775c1-831 6-928 50-1060 27-80 51-127 130-256l50-81 59 17c123 34 108 39 148-48 19-43 61-158 92-257s67-210 80-248c64-177 194-454 382-812 66-126 144-282 173-345 108-237 287-549 396-691 196-255 451-361 732-303 133 27 370 100 547 167 269 102 537 225 1013 464 243 123 445 223 447 223 3 0 30-39 61-86 59-91 63-93 124-69 12 4 86-95 290-386l275-391 36 6c68 11 228 68 278 99 52 33 231 193 231 206 0 4-129 183-286 397l-285 389 27 22c26 20 26 23 14 54-8 18-181 283-385 588-502 754-731 1124-879 1419-92 185-107 262-70 357 29 76 25 239-10 370-89 330-364 840-626 1161-182 224-400 553-440 667-25 71-25 99 0 122 30 27 35 76 12 128-53 119-230 246-611 436-443 222-696 301-921 287-142-10-163-16-276-91-149-99-184-110-334-109-100 0-148 5-240 27-169 41-228 45-282 19-25-13-51-35-62-54-10-18-50-81-88-140l-70-108-32 22c-56 39-86 71-86 95 0 32-26 93-53 121-29 31-109 72-142 72-55 0-103-32-140-95-9-15-24-10-150 45-77 35-201 87-275 117-150 61-160 67-160 95 0 49-58 108-106 108-9 0-31-15-50-34l-34-34-80 26c-77 25-80 28-86 62-9 50-21 68-57 90-46 29-65 25-108-20l-38-40-80 21c-78 21-79 22-86 58-9 51-31 80-71 97-30 13-38 13-64-1-16-8-38-30-47-48l-18-33-82 19c-78 18-83 21-83 46 0 39-35 89-76 108-32 16-38 16-62 2-20-11-60-68-68-96-2-9-230 39-233 49-2 7-19 28-37 46-47 47-112 44-139-7l-13-27-89 11c-87 10-90 11-130 53-30 32-47 42-71 42-44 0-61-9-77-40l-14-27-97 5c-92 5-99 7-121 33-13 15-34 31-46 34-12 4-30 9-40 12-11 3-30-8-54-32zm6216-3746c103-17 195-67 272-146 135-138 331-416 579-817 135-219 360-606 360-618 0-4-32-24-72-44-157-79-261-142-440-266-103-71-191-135-195-142-5-7-152-109-328-226-278-185-320-210-326-194-4 11-19 197-34 414-32 484-62 767-97 909-17 68-74 182-122 239-114 138-250 204-491 239-66 9-122 18-124 20-2 1 7 20 21 41 39 58 63 109 97 207 18 49 43 104 56 122 14 17 25 35 25 40 0 11 262 119 402 165 113 37 246 65 317 67 19 1 64-4 100-10zm-744-1041c51-19 97-59 116-102 43-98 122-880 136-1346 6-198 5-206-15-223-20-18-21-18-66 24-26 23-66 72-90 108-60 90-381 653-527 924-109 204-142 273-103 222 14-19 15-19 20 3 4 12 10 22 15 22 19 0-5 30-25 31-20 0-20 1-1 8 21 8 59-42 403-526 75-106 138-191 139-189 2 1-78 189-176 416l-180 414 31 35c39 44 85 142 94 197l6 41 96-24c54-13 111-29 127-35zM706 6458c-72-126-198-498-292-863-34-131-39-164-39-265 0-107 2-119 28-168 37-70 97-128 166-161 73-34 182-36 252-4 91 41 160 121 194 222 23 70 17 197-20 406-80 462-201 875-255 875-5 0-20-19-34-42z'
        transform='matrix(.1 0 0 -.1 0 797)'
      />
    </svg>
  )
}

export default SvgComponent
