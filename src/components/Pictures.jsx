import { useEffect, useState } from 'react';
import { Header } from './header/Header';
import { PictureList } from './picturesList/PictureList';
import { AddMoreButton } from './addMoreButton/AddMoreButton';
import { getProducts } from '../helpers/pixabayAPI';
import { Modal } from './modal/Modal';
import { FidgetSpinner } from 'react-loader-spinner';
import { Wrapper, Loader } from './Pictures.styled';

export const Pictures = () => {
  const [hits, setHits] = useState([]);
  const [per_page] = useState(12);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState('');

  const changeQuerry = name => {
    setQ(name);
    setHits([]);
  };

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleOpenModal = (img, title) => {
    setIsOpen(prev => !prev);
    setCurrentImg(img);
    setCurrentTitle(title);
  };

  const fetchData = async (per_page, page, q) => {
    const { hits, totalHits } = await getProducts({ per_page, page, q });
    setHits(prev => [...prev, ...hits]);
    setTotalHits(totalHits);
  };

  useEffect(() => {
    setLoading(true);
    try {
      fetchData(per_page, page, q);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [q, page, per_page]);

  return (
    <Wrapper>
      <Header newQuerry={changeQuerry} />
      <main>
        <PictureList data={hits} handleOpenModal={handleOpenModal} />
        {loading && (
          <Loader>
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              ballColors={['#ff0000', '#00ff00', '#0000ff']}
              backgroundColor="#F4442E"
            />
          </Loader>
        )}
        {hits.length !== 0 && hits.length < totalHits ? (
          <AddMoreButton loadMore={onLoadMore} />
        ) : null}
        {isOpen && (
          <Modal title={currentTitle} close={handleOpenModal} isOpen={isOpen}>
            <img src={currentImg} alt={currentTitle} />
          </Modal>
        )}
      </main>
    </Wrapper>
  );
};
