package javaSpring.Project.BookApi.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import javaSpring.Project.BookApi.models.Comment;
import javaSpring.Project.BookApi.repositories.CommentRepository;

@Service
public class CommentService {
	private final CommentRepository commentRepo;
	
	public CommentService(CommentRepository commentRepo) {
		this.commentRepo = commentRepo;
	}
	
    public Comment findBook(Long id) {
        Optional<Comment> optionalComment = commentRepo.findById(id);
        if(optionalComment.isPresent()) {
            return optionalComment.get();
        } else {
            return null;
        }
    }
    
    public Comment createComment(Comment c) {
    	return commentRepo.save(c);
    }
}
