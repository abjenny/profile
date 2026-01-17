function showContent(category) {
  const popup = document.getElementById('popupArea');
  let content = '';

  switch(category) {
    case 'dressing':
      content = `
        <ul>
          <li>Sundress</li>
          <li>Gowns</li>
          <li>Blouse<br/>
          and skirt</li>
          <li>Crop tops</li>
        </ul>`;
      break;
    case 'hairstyles':
      content = `
        <ul>
          <li>Plait</li>
          <li>Clipped in bun</li>
          <li>Wavy open</li>
          <li>Ponytail</li>
        </ul>`;
      break;
    case 'makeup':
      content = `
        <ul>
          <li>Love to have red lips</li>
          <li>Nail paint</li>
          <li>Eye lashes</li>
          <li>Heels</li>
        </ul>`;
      break;
    case 'notint':
      content = `
        <ul>
          <li>Boring chats</li>
          <li>Sharing personal info<br/> (IDs, socials etc.)</li>
          <li>Abusive talks</li>
        </ul>`;
      break;
    default:
      content = "<em>click on the above categories to view details</em>";
  }

  popup.innerHTML = content;
}