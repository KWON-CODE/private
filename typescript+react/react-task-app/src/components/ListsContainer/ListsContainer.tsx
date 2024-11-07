import React, { FC } from 'react'
import { IList } from '../../types';
import ActionButton from '../ActionButton/ActionButton';
import { listsContainer } from './ListContainer.css';
import List from '../List/List';


type TListsContainerProps = {
  boardId: string;
  lists: IList[];

}

const ListsContainer: FC<TListsContainerProps> = ({
  lists,
  boardId
}) => {
  return (
    <div className={listsContainer}>
      {
        lists.map(list => (
          <List
          key= {list.listId}
           list={list} 
           boardId={boardId}
           />
        ))
      }
      <ActionButton />
    </div>
  )
}

export default ListsContainer
