package javaSpring.Project.BookApi.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javaSpring.Project.BookApi.models.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {
}
