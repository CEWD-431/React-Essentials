export default function CoreConcepts ({image, title, description}) {
    return (
      <>
        <img src={image} alt={title} width="200" height="200" />
        <h3>{title}</h3>
        <p>{description}</p>
      </>
    );
  }
  