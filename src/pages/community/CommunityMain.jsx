import React from "react";
import { ContentArea, LeftBlock, Page } from "./communityStyle";
import PostListCard from "./post/postComponents/PostListCard";

const CommunityMain = () => {
  return (
    <div>
      <Page>
        <ContentArea>
          {/* 좌측 메인 */}
          <LeftBlock>
            {/* 채팅방 */}

            {/* 포스트 카드 */}
            <PostListCard />
            <PostListCard />
            <PostListCard />
            <PostListCard />
          </LeftBlock>
        </ContentArea>
      </Page>
    </div>
  );
};

export default CommunityMain;
