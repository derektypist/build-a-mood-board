export function MoodBoardItem({color, image, description}) {
  
  return (<div className="mood-board-item" style={{backgroundColor:color}}>
    
    <img className="mood-board-image" src={image} />
    <h3 className="mood-board-text">{description}</h3>
 
  </div>);
}

export function MoodBoard() {
  return (
   
    <div class="mood-board">
     <h1 className="mood-board-heading">Destination Mood Board</h1>
    <MoodBoardItem color="#35FFA6" image="https://i.pinimg.com/236x/be/a0/eb/bea0eb16637341d7e6182820f54d0bc6.jpg" description="Cambridge" />
    <MoodBoardItem color="#330505" image="https://i.pinimg.com/736x/60/65/82/6065826162d5ab4326089aff6af6266c.jpg" description="Paris" />
    <MoodBoardItem color="#4F8AFF" image="https://i.pinimg.com/236x/fd/06/1f/fd061ff2d9281ea0adb88b2e0a0898ea.jpg" description="Lakenheath" />
    <MoodBoardItem color="#ff1ea8" image="https://i.pinimg.com/236x/7c/32/e8/7c32e83069c00a8a80a197b6c3d35f06.jpg" description="Torremolinos" />
    <MoodBoardItem color="#FF875B" image="https://i.pinimg.com/236x/5f/f5/56/5ff556b3b2ff011aa0f0d9e0c5729db8.jpg" description="Bromley" />
    <MoodBoardItem color="#C560FF" image="https://i.pinimg.com/236x/b4/e5/5b/b4e55bd7a4b6c98a2f8636d7536d328a.jpg" description="Cannes" />
    <MoodBoardItem color="#0078A4" image="https://i.pinimg.com/236x/8d/cf/5e/8dcf5e12007e369b40630c10564e5513.jpg" description="Menton" />
    <MoodBoardItem color="#D500CE" image="https://i.pinimg.com/236x/0c/b3/da/0cb3da0b7686b8d33ce7d8f88f50c0a7.jpg" description="Prague" />
    <MoodBoardItem color="#9ACD32" image="https://i.pinimg.com/236x/85/2d/63/852d638cd297f44517c962aa43916f1f.jpg" description="Peterborough" />

    </div>
  );
}
