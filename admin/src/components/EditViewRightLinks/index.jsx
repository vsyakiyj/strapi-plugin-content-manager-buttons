import React from 'react'; 
import { unstable_useContentManagerContext as useContentManagerContext } from '@strapi/strapi/admin';

const EditViewRightLinks = (props) => {
  console.log('props');
  console.log(JSON.stringify(props, null, 2));

  const { slug } = props;
  const { form, isCreatingEntry } = useContentManagerContext();
  const shareUrl = form?.values?.shareUrl || form?.initialValues?.shareUrl;
  
  console.log('shareUrl');
  console.log(shareUrl);
  
	// Вынести в конфиг
  if (slug !== 'api::product.product') {
    return null;
  }
  const handleClick = () => { 
  
    if (!shareUrl) {
      window.alert('Поле shareUrl не заполнено');
      return;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',

    height: '3.2rem',
    padding: '7px 16px',
    borderRadius: '4px',

    border: '1px solid #4945ff',
    background: '#4945ff',
    color: '#ffffff',

    cursor: 'pointer',
    textDecoration: 'none',
    font: 'inherit',
    lineHeight: 1.5,
      }}
    >
      Перейти на элемент на сайте
    </button>
  );
};

export default EditViewRightLinks;