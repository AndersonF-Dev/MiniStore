// import React from 'react'
// import user1 from '../../assets/img/user1.png';
import { commentsData } from '../../data/commentsData';
import {
    Conteiner,
    CommentsWrapper,
    InforText,
    CommentsConteint,
    CommentsImg,
    CommentsInforWrapper,
    CommentsNameAutor,
    CommentsData,
    CommentsText,
} from './styleComments'

const Comments = () => {
  return (
    <Conteiner>
        <CommentsWrapper>
            <InforText>3 Comentários</InforText>
            {commentsData.map((comment, index) => (
                <CommentsConteint
                    key={comment.id}
                    style={index === 1 ? {marginLeft: '40px'} : {}}
                >
                <CommentsImg src={comment.image} alt='img'/>
                <CommentsInforWrapper>
                    <CommentsNameAutor>
                        {comment.name} 
                        <CommentsData>
                            {comment.date}
                        </CommentsData>
                    </CommentsNameAutor>
                    <CommentsText>
                        {comment.text}
                    </CommentsText>
                </CommentsInforWrapper>
            </CommentsConteint>
            ))}

        </CommentsWrapper>

    </Conteiner>
  )
}

export default Comments