package javaSpring.Project.BookApi.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javaSpring.Project.BookApi.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
	List<Book> findAll();
	List<Book> findByTitleContaining(String title);
	List<Book> findByAuthorContaining(String author);
}
