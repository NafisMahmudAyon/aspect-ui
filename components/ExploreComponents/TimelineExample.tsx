import { Timeline, TimelineItem } from '@/app/src'
import { BriefcaseBusiness, Building, Handshake } from 'lucide-react'

const TimelineExample = () => {
  return (
    <div className='w-full'>
      <div className="p-8">
        <Timeline position="mixed" lineStyle='dashed'>
          <TimelineItem icon={<Building />}>
            <h3 className="font-bold ">First Event</h3>
            <p className=''>This is the first timeline item</p>
          </TimelineItem>

          <TimelineItem icon={<BriefcaseBusiness />}>
            <h3 className="font-bold ">Second Event</h3>
            <p className=''>This is the second timeline item</p>
          </TimelineItem>

          <TimelineItem icon={<Handshake />}>
            <h3 className="font-bold ">Third Event</h3>
            <p className=''>This is the third timeline item</p>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  )
}

export default TimelineExample