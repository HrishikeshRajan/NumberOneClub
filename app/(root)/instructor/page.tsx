

import SearchBox from '@/app/components/SearchBox'
import InstructorSortTab from '@/app/components/tab/InstructorSortTab'
import { categorySeed } from '@/app/seed/Category'


function Page() {
  return (
    <div>
      <SearchBox />
       <InstructorSortTab seed={categorySeed} />
    </div>
  )
}

export default Page
