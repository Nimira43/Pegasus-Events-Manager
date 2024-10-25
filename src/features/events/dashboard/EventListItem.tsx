import { Item, ItemGroup, Segment, SegmentGroup } from 'semantic-ui-react'

export default function EventListItem() {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image size='tiny' circular src='/user.png'/>
          </Item>
        </ItemGroup>
      </Segment>
    </SegmentGroup>
  )
}
