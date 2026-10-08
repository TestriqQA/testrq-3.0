"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaReply,
  FaFlag,
  FaThumbsUp,
  FaThumbsDown,
  FaUser,
} from "react-icons/fa";

interface Comment {
  id: string;
  author: string;
  authorImage: string;
  content: string;
  date: string;
  likes: number;
  dislikes: number;
  replies: Comment[];
  isVerified?: boolean;
}

interface BlogPostCommentsProps {
  postId: string;
}

const BlogPostComments: React.FC<BlogPostCommentsProps> = ({ }) => {
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const [comments, setComments] = useState<Comment[]>([
    /* ... same as before ... */
  ]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: "You",
        authorImage: "/api/placeholder/40/40",
        content: newComment,
        date: "Just now",
        likes: 0,
        dislikes: 0,
        replies: [],
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const handleSubmitReply = (e: React.FormEvent, parentId: string) => {
    e.preventDefault();
    if (replyContent.trim()) {
      const reply: Comment = {
        id: Date.now().toString(),
        author: "You",
        authorImage: "/api/placeholder/40/40",
        content: replyContent,
        date: "Just now",
        likes: 0,
        dislikes: 0,
        replies: [],
      };

      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === parentId) {
            return { ...comment, replies: [...comment.replies, reply] };
          }
          return comment;
        })
      );

      setReplyContent("");
      setReplyTo(null);
    }
  };

  const CommentComponent: React.FC<{ comment: Comment; isReply?: boolean }> = ({
    comment,
    isReply = false,
  }) => (
    <div
      className={`$ {
        isReply ? "ml-12 mt-4" : "mb-6"
      } bg-white rounded-lg p-6 border border-gray-200`}
    >
      <div className="flex items-start gap-4">
        <Image
          title={comment.author}
          src={comment.authorImage}
          alt={comment.author}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-gray-900">{comment.author}</h4>
            {comment.isVerified && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Author
              </span>
            )}
            <span className="text-sm text-gray-500">{comment.date}</span>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            {comment.content}
          </p>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors cursor-pointer">
              <FaThumbsUp className="w-4 h-4" />
              <span>{comment.likes}</span>
            </button>

            <button className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors cursor-pointer">
              <FaThumbsDown className="w-4 h-4" />
              <span>{comment.dislikes}</span>
            </button>

            {!isReply && (
              <button className="cursor-pointer"
                onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
              >
                <FaReply className="w-4 h-4" />
                <span>Reply</span>
              </button>
            )}

            <button className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors cursor-pointer">
              <FaFlag className="w-4 h-4" />
              <span>Report</span>
            </button>
          </div>

          {replyTo === comment.id && (
            <form
              onSubmit={(e) => handleSubmitReply(e, comment.id)}
              className="mt-4"
            >
              <label htmlFor={`comments-reply-${comment.id}`} className="sr-only">
                Reply to {comment.author}
              </label>
              <textarea
                id={`comments-reply-${comment.id}`}
                name="reply"
                autoComplete="off"
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write a reply..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={3}
              />
              <div className="flex items-center gap-3 mt-3">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Post Reply
                </button>
                <button
                  type="button"
                  onClick={() => setReplyTo(null)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {comment.replies.length > 0 && (
        <div className="mt-4">
          {comment.replies.map((reply) => (
            <CommentComponent key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Comments (
          {comments.length +
            comments.reduce((acc, comment) => acc + comment.replies.length, 0)}
          )
        </h3>
        <p className="text-gray-600">
          Join the discussion and share your thoughts about this article.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <FaUser className="w-5 h-5 text-gray-600" />
          </div>
          <form onSubmit={handleSubmitComment} className="flex-1">
            <label htmlFor="comments-newComment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comments-newComment"
              name="comment"
              autoComplete="off"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts about this article..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4}
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>Be respectful and constructive in your comments</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Preview
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
          Load More Comments
        </button>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 mt-8 border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-3">
          💬 Comment Guidelines
        </h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Be respectful and constructive in your feedback</li>
          <li>• Stay on topic and relevant to the article content</li>
          <li>• No spam, self-promotion, or offensive language</li>
          <li>• Share your experiences and ask thoughtful questions</li>
          <li>• Help others by providing helpful insights and solutions</li>
        </ul>
      </div>
    </section>
  );
};

export default BlogPostComments;
