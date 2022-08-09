const house = {
  front_door: {
    roomName: 'Front Door',
    info: `
      * 4 bedroom
      * 3 bath
      * Priced at $180,000`,
    img: './static_assets/360_front_door.jpg',
    adjacentRooms: ['Foyer'],
    video_img : './img/icon/video.png',
    position:['2000', '200', '-2000'],
  },
  foyer: {
    roomName: 'Foyer' ,
    info: `
      * Wrought iron front door.
      * Elegant etched glass inserts for privacy.
      * Beautiful acrylic chandelier with LED lights.
      * Hall closet for guest's coats and purses or for media storage.
      * Classic non-skid ceramic tile floor.`,
    img: './static_assets/360_foyer.jpg',
    adjacentRooms: ['Dining Room'],
    position: ['2000', '200','-2000'],
  },
  dining_room: {
    roomName: 'Dining Room',
    info:`
      * Elegant chandelier with LED lights.
      * Tiered high ceilings.
      * Wrought iron window for added security.
      * Direct acces to kitchen for convenience.
      * Beautiful tile floor.`,
    img: './static_assets/360_dining_room.jpg',
    adjacentRooms: ['Kitchen'],
    position: ['2000', '200','-2000'],
  },
  kitchen: {
    roomName: 'Kitchen',
    info: `
      * Granite counter tops and backsplash (3/4 inch-thick Brazilian Giallo Fiesta).
      * Custom-made island with end drawers and wine bottle storage.
      * Samsung stainless steel appliances.
      * Birchwood custom cabinets and pantry with elegant crown molding.
      * Stainless steel 9" extra deep double sinks with pullout faucet and soap dispenser.
      * Under cabinet and top of cabinet LED lights.`,
    img: './static_assets/360_kitchen.jpg',
    adjacentRooms: ['Breakfast Nook'],
    position: ['2000', '200','-2000'],
  },
  breakfast_nook: {
    roomName: 'Breakfast Nook',
    info: `
      * Granite top custom-made cabinet
      * Custom wine rack display and storage.
      * Modern chandelier with LED lights.
      * Easy access to backyard when entertaining.
      * Open and spacious.
    `,
    img: './static_assets/360_breakfast_nook.jpg',
    adjacentRooms: ['Backyard'],
    position: ['2000', '200','-2000'],
  },
  backyard: {
    roomName: 'Backyard',
    info: `
      * Extra large back yard for playground or future pool.
      * Sprinkler system.
      * Beautiful fencing.
      * Mature trees:
        shade: oak, pecan, fresno, acacia, royal poinciana, ficus, ceiba
        fruit: papaya, mango, limes.
      * Entertaining and eating area for backyard barbeques.
    `,
    img: './static_assets/360_backyard.jpg',
    adjacentRooms: ['Master Bedroom'],
    position: ['2000', '200','-2000'],
  },
  master_bedroom: {
    roomName: 'Master Bedroom',
    info: `
    * Extra large bedroom, allows for sitting area.
    * Tiered cieling or architecture.
    * Quiet ceiling fan and light fixture.
    * Plush neutral taupe carpet.
    * Sliding door for easy access to backyard.`,
    img: './static_assets/360_master_bedroom.jpg',
    adjacentRooms: ['Master Bathroom'],
    position: ['2000', '200','-2000'],
    
  },
  master_bathroom:  {
    roomName: 'Master Bathroom',
    info: `
      * Custom glass shower enclosure.
      * Porcelain bath tiles and travertine molding.
      * Privacy glass block window.
      * Relaxing garden tub with jets.
      * Seperate toilet room for privacy with storage.
      * Double extractor lighted vents.`,
    img: './static_assets/360_master_bathroom.jpg',
    adjacentRooms: ['Master Bathroom Two'],
    position: ['2000', '200','-2000'],
  },
  master_bathroom_two: {
    roomName: 'Master Bathroom Two',
    info: `
      * Custom glass shower enclosure.
      * Porcelain bath tiles and travertine molding.
      * Privacy glass block window.
      * Relaxing garden tub with jets.
      * Seperate toilet room for privacy with storage.
      * Double extractor lighted vents.`,
    img: './static_assets/360_master_bathroom_two.jpg',
    adjacentRooms: ['Living Room'],
    position: ['2000', '200','-2000'],
  },
  living_room: {
    roomName: 'Living Room',
    info: `
      * Informal sunken family room.
      * Chimney with mantle.
      * Remote controlled ceiling fans.
      * Tiered ceiling.
      * T.V. wall mount/media closet.`,
    img: './static_assets/360_living_room.jpg',
    adjacentRooms: ['Bedroom One'],
    position: ['2000', '200','-2000'],
  },
  bedroom_one: {
    roomName: 'Bedroom One',
    info: `
      * Spacious bright and airy room.
      * Perect for guests or mother-in-law.
      * Private bathroom.
      * Built-in bookshelf with elegant crown molding.
      * Large space and wood flooring.
      * Decorative wainscott and chair rail modlings.
    `,
    img: './static_assets/360_bedroom_one.jpg',
    adjacentRooms:['Bathroom One'],
    position: ['2000', '200','-2000'],
  },
  bathroom_one: {
    roomName: 'Bathroom One',
    info: `
      * Granite vanity and custom beveled edge mirror.
      * Vanity-Kohler sink and bath fixtures.
      * Elongated Kohler water saver toilet.
      * Kohler glass shower enclosure.
      * Custom ceramic tile and decorative metallic borders.
      * Large custom storage closet.`,
    img: './static_assets/360_bathroom_one.jpg',
    adjacentRooms: ['Bathroom Two'],
    position: ['2000', '200','-2000'],
  },
  bathroom_two: {
    roomName: 'Bathroom Two',
    info: `
      * Marble vanity top with custom beveled-edge mirror.
      * Elegant Kohler sink and bath fixtures.
      * Elongated Kohler water-saver toilet.
      * Custom large storage closet with extra deep shelves.
      * Beautiful ceramic tile shower surround.
      * Kohler glass shower enclosure.`,
    img: './static_assets/360_bathroom_two.jpg',
    adjacentRooms: ['Bedroom Two'],
    position: ['2000', '200','-2000'],
  },
  bedroom_two: {
    roomName: 'Bedroom Two',
    info: `
      * Large spacious room for 2-twin or 1-queen bedroom.
      * Neutral taupe plush carpet.
      * Wrought iron window for added security.
      * Two closets.
      * Custom shelving and cabinet.
    `,
    img: './static_assets/360_bedroom_two.jpg',
    adjacentRooms: ['Bedroom Three'],
    position: ['2000', '200','-2000'],
  },
  bedroom_three: {
    roomName: 'Bedroom Three',
    info: `
      * Large spacious room enough for 2 twin or 1 queen size bed.
      * Lighted ceiling fan fixture.
      * Two closets.
      * Plush neutral taupe carpet.`,
    img: './static_assets/360_bedroom_three.jpg',
    adjacentRooms: ['Laundry Room'],
    position: ['2000', '200','-2000'],
  },
  laundry_room: {
    roomName: 'Laundry Room',
    info: `
      * Inside laundry room (washer and dryer negotiable).
      * Extra overhead storage cabinets.
      * Large storage closet.
      * Linen closet with extra deep shelves.`,
    img: './static_assets/360_laundry_room.jpg',
    adjacentRooms: ['Garage'],
    position: ['2000', '200','-2000'],
  },
  garage: {
    roomName: 'Garage',
    info: `
      * Garage room windows for daylight convenience.
      * Double car garage with anti-slip surface floor.`,
    img: './static_assets/360_garage.jpg',
    adjacentRooms: ['Front Door'],
    position: ['2000', '200','-2000'],
  }
}
